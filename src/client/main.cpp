#include "koaladb.hpp"

int main() {
  KoalaDB::KoalaDB db = KoalaDB::KoalaDB(nullptr);
  db.createConnection();

  return 0;
}