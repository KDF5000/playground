fn main() {
    let s1 = String::from("Hello, ");
    let s2 = String::from("world!");
    let s3 = s1 + &s2; // 注意 s1 被移动了，不能继续使用
    println!("s2 is {}, s3 is {}", s2, s3);

    let mut s4 = String::from("hello");
    let s5 = String::from(", world");
    s4.push_str(&s5);
    println!("s5 is {}, s4 is {}", s5, s4);

    let s6 = ", tom";
    s4.push_str(s6);
    println!("s6 is {}, s4 is {}", s6, s4); // s6依然拥有所有权
                                            

    let s7 = String::from("tic");
    let s8 = String::from("tac");
    let s9 = String::from("toe");

    // s7, s8 s9都有效, s10是一个新的string
    let s10 = format!("{}-{}-{}", s7, s8, s9);
    println!("s10: {}, s7: {}, s8: {}, s9: {}",s10, s7, s8, s9);

    // s7转移所有权给s11, s8依然有效
    let s11 = s7 + &s8;
    println!("s11: {}, s8: {}", s11, s8);


}
