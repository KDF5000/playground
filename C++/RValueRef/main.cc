#include <iostream>
#include <vector>

class test final {
   private:
    char* _data;
    size_t _len;

    void _init_data(const char* s) {
        _data = new char[_len + 1];
        memcpy(_data, s, _len);
        _data[_len] = 0;
    }

   public:
    test() : _data(nullptr), _len(0) {
        std::cout << "construct" << std::endl;
    }

    test(const char* s) {
        _len = strlen(s);
        _init_data(s);
    }

    test(const test& t) {
        _len = t._len;
        _init_data(t._data);
        std::cout << "copy construct" << std::endl;
    }

    test(test&& t) {
        _len = t._len;
        _data = t._data;
        t._data = nullptr;
        std::cout << "move construct" << std::endl;
    }

    ~test() {
        if (_data) {
            delete _data;
        }
        std::cout << "deconstruct" << std::endl;
    }

    test& operator=(const test& t) {
        if (this != &t) {
            _len = t._len;
            _init_data(t._data);
        }
        std::cout << "assignment" << std::endl;
        return *this;
    }
    test& operator=(test&& t) {
        if (this != &t) {
            _len = t._len;
            _data = t._data;
            t._data = nullptr;
        }
        std::cout << "move assignment" << std::endl;
        return *this;
    }
};

int main() {
    // method A
    // std::vector<test> v{test()};

    // method B
    std::vector<test> v;
    test t;
    t = test();

    v.push_back(std::move(t));
    return 0;
}
