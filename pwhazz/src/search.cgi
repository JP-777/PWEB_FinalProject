#!"C:\Strawberry\perl\bin\perl.exe"

use strict;
use warnings;
use CGI;
use DBI;
use JSON;

my $cgi = CGI->new;
print $cgi->header('application/json');

my $keyword = $cgi->param('keyword') || '';

# Configuración de la base de datos
my $dsn = "DBI:mysql:database=sales;host=localhost";
my $db_username = "root";
my $db_password = "";

# Conexión a la base de datos
my $dbh = DBI->connect($dsn, $db_username, $db_password, { RaiseError => 1, PrintError => 0 });

# Preparar la consulta SQL
my $sql = "SELECT * FROM products WHERE productName LIKE ? OR brand LIKE ?";
my $sth = $dbh->prepare($sql);
$sth->execute("%$keyword%", "%$keyword%");

# Recuperar los resultados
my @results;
while (my $row = $sth->fetchrow_hashref) {
    push @results, $row;
}

# Convertir los resultados a JSON
print to_json(\@results);

# Desconectar de la base de datos
$dbh->disconnect;
