#pragma once

namespace KoalaDB {
class KoalaDB {
public:
  KoalaDB(const char* path);

  int createConnection();

private:
};
}  // namespace KoalaDB