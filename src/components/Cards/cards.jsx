import "./cards.css";
import PropTypes from "prop-types";

const Cards = ({ bgColor, title, icon, gugu,crest }) => {
  return (
    <div className="UP" style={{ background: bgColor }}>
      <div style={{color: gugu}}>
      {icon}
        <h3>{title}</h3>
      </div>
        <p style={{color:crest}}>
          Study at the designated institution and complete the specified course
          of study.you are allowed to work part time during the academic section
          and full-time during scheduled breaks.
        </p>
    </div>
  );
}

Cards.propTypes={
  bgColor: PropTypes.string,
  title: PropTypes.string,
  gugu:PropTypes.string,
  icon:PropTypes.node,
  crest:PropTypes.string

}

export default Cards;
