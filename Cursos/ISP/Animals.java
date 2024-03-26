public interface Animal {
    void run();
}

public interface Flyers extends Animal{
    void run();
    void fly();
}

public interface Canine extends Animal{
    void run();
    void bark();
}


public class Dog implements Canine {
    @Override
    public void run() {
        System.out.print("Dog is running");
    }

    @Override
    public void bark() {
        System.out.print("Dog is barking");
    }
}

public class Bird implements Flyers {
    public void run() {
        System.out.print("Bird is running");
    }
    public void fly() {
        System.out.print("Bird is flying");
    }
}