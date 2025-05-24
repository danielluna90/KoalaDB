cmake_minimum_required(VERSION 3.10)

project(koaladb LANGUAGES CXX VERSION "0.1")

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED on)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Wall -Wextra -Werror")

add_library(koaladb SHARED src/common/api/database.cpp)
target_include_directories(koaladb PRIVATE include)

add_executable(koaladb_client src/client/main.cpp)
target_include_directories(koaladb_client PRIVATE include)
target_link_libraries(koaladb_client koaladb)