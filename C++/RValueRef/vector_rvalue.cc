#include <iostream>
#include <vector>

struct B {
    int a;
};

struct A {
    A() {
        std::cout << "Construct" << std::endl;
    }

    std::vector<int> numbers_;
};


int main() {
    A a;
    a.numbers_.push_back(1);
    std::vector<A> t;
    t.push_back(std::move(a));

    std::cout << a.numbers_.size() << std::endl;
    std::cout << t[0].numbers_.size() << std::endl;

    return 0;
}
