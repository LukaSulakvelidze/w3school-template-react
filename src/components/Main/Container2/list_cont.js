export default function List_container() {
  return (
    <div className="container2_item2">
      <div className="conntainer2_item2_1">
        <h1> Popular Posts </h1>
      </div>

      <ul className="list_container">
        <li className="lits_item">
          <img
            className="list_image"
            src="https://w3school-template.vercel.app/images/workshop.jpg"
            alt="Image"
            style={{ width: 50 }}
          />
          <span className="list_span">
            Lorem
            <br />
            <span className="list_span1">Sed mattis nunc</span>
          </span>
        </li>

        <li className="lits_item">
          <img
            className="list_image"
            src="https://w3school-template.vercel.app/images/gondoli.jpg"
            alt="Image"
            style={{ width: 50 }}
          />
          <span className="list_span">
            Ipsum
            <br />
            <span className="list_span1">Praes tinci sed</span>
          </span>
        </li>

        <li className="lits_item">
          <img
            className="list_image"
            src="https://w3school-template.vercel.app/images/ski.jpg"
            alt="Image"
            style={{ width: 50 }}
          />
          <span className="list_span">
            Dorum
            <br />
            <span className="list_span1">Ultricies congue</span>
          </span>
        </li>

        <li className="lits_item">
          <img
            className="list_image"
            src="https://w3school-template.vercel.app/images/mountain.jpg"
            alt="Image"
            style={{ width: 50 }}
          />
          <span className="list_span">
            Mingsum
            <br />
            <span className="list_span1">Lorem ipsum dipsum</span>
          </span>
        </li>
      </ul>
    </div>
  );
}
