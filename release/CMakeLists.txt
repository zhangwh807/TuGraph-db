# package
set(CPACK_PACKAGE_VERSION_MAJOR ${LGRAPH_VERSION_MAJOR})
set(CPACK_PACKAGE_VERSION_MINOR ${LGRAPH_VERSION_MINOR})
set(CPACK_PACKAGE_VERSION_PATCH ${LGRAPH_VERSION_PATCH})
set(CPACK_PACKAGE_NAME "tugraph")
set(CPACK_PACKAGE_DESCRIPTION "TuGraph is an efficient graph database.")
set(CPACK_PACKAGE_DESCRIPTION_SUMMARY "TuGraph Graph Database.")
set(CMAKE_INSTALL_PREFIX "/usr/local")
set(CPACK_PACKAGING_INSTALL_PREFIX "/usr/local")
set(CPACK_RPM_PACKAGE_PROVIDES "libc.so.6(GLIBC_PRIVATE)(64bit),libvsag.so()(64bit)")

set(CPACK_PACKAGE_ARCHITECTURE ${CMAKE_HOST_SYSTEM_PROCESSOR})

set(CPACK_BUILD_TYPE_MINI "")
if (MINI_RUNTIME)
    set(CPACK_BUILD_TYPE_MINI "-mini")
endif()

set(CPACK_PACKAGE_RELEASE "1")
if (OURSYSTEM STREQUAL "centos7")
    set(CPACK_PACKAGE_RELEASE "1.el7")
    set(CPACK_GENERATOR "RPM")
    set(CPACK_RPM_SPEC_MORE_DEFINE "%define __python python3")
elseif (OURSYSTEM STREQUAL "centos8")
    set(CPACK_PACKAGE_RELEASE "1.el8")
    set(CPACK_GENERATOR "RPM")
elseif (OURSYSTEM STREQUAL "centos9")
    set(CPACK_PACKAGE_RELEASE "1.el9")
    set(CPACK_GENERATOR "RPM")
elseif (OURSYSTEM STREQUAL "ubuntu")
    set(CPACK_PACKAGE_RELEASE "1")
    set(CPACK_GENERATOR "DEB")
else ()
    set(CPACK_GENERATOR "TGZ")
endif ()

set(CPACK_PACKAGE_FILE_NAME "${CPACK_PACKAGE_NAME}${CPACK_BUILD_TYPE_MINI}-${CPACK_PACKAGE_VERSION_MAJOR}.${CPACK_PACKAGE_VERSION_MINOR}.${CPACK_PACKAGE_VERSION_PATCH}-${CPACK_PACKAGE_RELEASE}.${CPACK_PACKAGE_ARCHITECTURE}")

set(CPACK_RPM_PACKAGE_URL "https://tugraph.org")
set(CPACK_DEBIAN_PACKAGE_MAINTAINER "tugraph")

include(CPack)
