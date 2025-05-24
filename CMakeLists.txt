cmake_minimum_required(VERSION 3.10)

project(koaladb LANGUAGES CXX VERSION "0.1")

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED on)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Wall -Wextra -Werror")

# Dependencies
add_subdirectory(third_party/spdlog)
add_subdirectory(third_party/catch2)

# Library
add_library(koaladb SHARED src/common/api/database.cpp)
target_include_directories(koaladb PRIVATE include)
target_link_libraries(koaladb PRIVATE spdlog::spdlog $<$<BOOL:${MINGW}>:ws2_32>)

# Client App
add_executable(koaladb_client src/client/main.cpp)
target_include_directories(koaladb_client PRIVATE include)
target_link_libraries(koaladb_client PRIVATE koaladb)

# Testing
file(GLOB_RECURSE test_sources test/**/*.cpp)

add_executable(unit_tests ${test_sources})
target_include_directories(koaladb_client PRIVATE include)
target_link_libraries(unit_tests PRIVATE Catch2::Catch2WithMain)
target_link_libraries(unit_tests PRIVATE koaladb)

include(CTest)
include(Catch)
catch_discover_tests(unit_tests)