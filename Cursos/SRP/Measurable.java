abstract class Measurable {
    abstract Double getTotalLength();
    abstract Double getSentLength();
    
    public Double getSentLengthPercentage() {
        return getSentLength() * 100 / getTotalLength();
    }
}