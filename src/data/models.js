class Route {
  constructor(
    id,
    title,
    quantity,
    difficulty,
    category,
    imageUrl,
    downloaded,
    kms,
    rating,
    subsectores,
    location
  ) {
    this.id = id;
    this.title = title;
    this.quantity = quantity;
    this.difficulty = difficulty;
    this.category = category;
    this.imageUrl = imageUrl;
    this.downloaded = downloaded;
    this.kms = kms;
    this.rating = rating;
    this.subsectores = subsectores;
    this.location = location;
  }
}

export default Route;
