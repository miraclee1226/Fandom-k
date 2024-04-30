import Button from "../components/Button";

export default function MyPage() {
  return (
    <>
      <Button>후원하기</Button>
      <Button.Border>더 보기</Button.Border>
      <Button.Arrow direction="left" />
      <Button.Arrow direction="right" size="lg" />
      <Button.Round>+ 추가하기</Button.Round>
    </>
  );
}
