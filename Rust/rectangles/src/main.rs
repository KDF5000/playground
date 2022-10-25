
fn area(width: u32, height: u32) -> u32 {
    width * height
}

#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }

    fn can_hold(&self, other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }
}


fn area1(rectangle: &Rectangle) -> u32{
    rectangle.width * rectangle.height
}

fn main() {
    
    println!("Hello, world!");
    println!("40 * 40 = {}", area(40, 40));
    let rectangle = Rectangle{
        width: 40,
        height: 40,
    };

    let rect1 = Rectangle {
        width: 60,
        height: 45,
    };

    println!("40 * 40 = {}", area1(&rectangle));
    println!("rec = {:#?}", rectangle);
    dbg!(&rectangle);

    println!("rec.area = {}", rectangle.area());
    println!("can_hold={}", rectangle.can_hold(&rect1));
}
