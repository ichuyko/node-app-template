export class Post {
  // @IsInt()
  id: number;

  // @IsInt()
  // @Length(10, 20)
  title: string;

  // @Contains("hello")
  text: string;
  // @Min(0)

  // @Max(10)
  rating: number;
}
