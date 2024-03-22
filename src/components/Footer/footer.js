import Button from "../Button_Comp/button";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footcont">
        <Button
          width="107"
          cursor="not-allowed"
          opacity=".3"
          value="Previous"
        />
        <Button width="93" cursor="pointer" opacity="1" value="Next" />
      </div>

      <p>
        Powered by
        <a href="https://www.youtube.com/watch?v=QdBZY2fkU-0">W3.css</a>
      </p>
    </div>
  );
}
