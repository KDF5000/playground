#include <iostream>

int A, B;

void foo() {
  A = B + 1;
  B = 0;
}

int main() {
  foo();
  return 0;
}
