import Container_item1 from "./container1_item";

export default function Container1() {
  return (
    <div className="container1">
      <Container_item1
        image_url="https://www.w3schools.com/w3images/woods.jpg"
        value="TITLE HEADING"
        title_description="Title description."
        title_date="April 7, 2014"
        paragraph="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id
       lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi
       non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus
       vitae, ultricies congue gravida diam non fringilla."
        classname="span0"
        comment_num="0"
      />
      <Container_item1
        image_url="https://w3school-template.vercel.app/images/bridge.jpg"
        value="BLOG ENRTY"
        title_description="Title description."
        title_date="April 2, 2014"
        paragraph="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id
       lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi
       non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus
       vitae, ultricies congue gravida diam non fringilla."
        classname="span2"
        comment_num="2"
      />
    </div>
  );
}
