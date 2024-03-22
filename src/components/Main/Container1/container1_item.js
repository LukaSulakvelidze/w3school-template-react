export default function Container_item1(props) {
  return (
    <div style={{ height: props.height }} className="container1_item">
      <img className="cont1_images" src={props.image_url} alt="Image" />
      <h1 style={{ fontSize: props.fontsize }} className="title_heading">
        {props.value}
      </h1>
      <h2
        style={{ display: props.titledisplaystatus }}
        className="title_description"
      >
        {props.title_description}
        <span className="date-span"> {props.title_date}</span>
      </h2>
      <p style={{ margin: props.marginstatus }} className="paragraph">
        {props.paragraph}
      </p>
      <button
        style={{ display: props.buttondisplaystatus }}
        className="read_more"
      >
        READ MORE
      </button>
      <p style={{ display: props.displaycommentstatus }} className="comments">
        Comments
        <span
          style={{ display: props.spandisplaystatus }}
          className={props.classname}
        >
          {props.comment_num}
        </span>
      </p>
    </div>
  );
}
