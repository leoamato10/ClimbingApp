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
    subsectores_pic,
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
    this.subsectores_pic = subsectores_pic;
    this.location = location;
  }
}

export default Route;
