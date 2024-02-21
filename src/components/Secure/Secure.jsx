import  { IoMdGlobe } from "react-icons/io";
import Cards from "../Cards/cards"; //for importing components or jsx elemens
import  "./Secure.css"; //for importing file
import{ MdOutlineLibraryAddCheck } from "react-icons/md";
import { HiOutlineCursorClick } from "react-icons/hi";
import{ GrChapterAdd } from "react-icons/gr";

const Secure = () => {
  return (
    <div>
      <h2>Secure your visa in few steps</h2>

      <p className="jix">
        Aliquet urma aliquam est as cornvallis pret im.sed erque blandis vou put
        ju malesuede odio at cursew masses misl niyu ur at cras
      </p>

      <div className="yet">
        <Cards
          gugu="#fff"
          bgColor="blue"
          title="Choose definition"
          icon={<IoMdGlobe />}
        />

        <Cards
          gugu="#52065c"
          crest="#09090a"
          bgColor="#f5e6ec"
          title="Provide Visa Information"
          icon={<HiOutlineCursorClick />}
        />
        <Cards
          gugu="#238c3a"
          crest="#09090a"
          bgColor="#d7fadc"
          title="Submit Required Documents"
          icon={<MdOutlineLibraryAddCheck />}
        />
        <Cards
          gugu="#d633a0"
          crest="#09090a"
          bgColor="#d9d7d9"
          title="Visa Approval & Delivery"
          icon={<GrChapterAdd />}
        />
      </div>
    </div>
  );
};

export default Secure;
