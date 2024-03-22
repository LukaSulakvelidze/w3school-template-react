import Container_item1 from "../Container1/container1_item";
import Container2_item2 from "./container2_item2";

export default function Container2() {
  return (
    <div className="container2">
      <Container_item1
        height="unset"
        image_url="https://w3school-template.vercel.app/images/avatar.jpg"
        titledisplaystatus="none"
        value="My Name"
        fontsize="20px"
        paragraph="Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a
        interest of lorem ipsum and mauris neque quam blog. I want to share my world with you."
        marginstatus="15px 0 10px 16px"
        buttondisplaystatus="none"
        displaycommentstatus="none"
        spandisplaystatus="none"
      />

      <Container2_item2 />
    </div>
  );
}
