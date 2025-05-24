#include "common/api/database.hpp"

#include <cstdio>

namespace KoalaDB {
KoalaDB::KoalaDB(const char* path) {
  if (path == nullptr) {
    printf("Creating In-Memory DB\n");
  }
}

int KoalaDB::createConnection() { return 0; }
}  // namespace KoalaDB
