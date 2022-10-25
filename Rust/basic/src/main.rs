fn test() -> i32 {
    return 5;
}

fn first_word(s: &String) -> &str {
    let bytes = s.as_bytes();

    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[0..i];
        }
    }

    &s[..]
}

fn main() {
    let y = {
        let x = 3;
        x + 1
    };

    println!("y={}", y);

    let n = test();
    println!("n={}", n);

    let mut s = String::from("hello");

    let r1 = &mut s;

    r1.push_str(" world");

    println!("{}", r1);

    let first_word = first_word(&s);
    // try to clear s
    // s.clear();

    println!("first word: {}", first_word);
}
