final class Song extends Measurable {

  public Double totalLength();

  public Double sentLength();

  @Override
  public Double getTotalLength() {
    return totalLength;
  }

  @Override
  public Double getSentLength() {
    return sentLength;
  }
}
