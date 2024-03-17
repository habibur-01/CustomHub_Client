import { PropTypes } from "prop-types";


const SectionHeader = ({title, subTitle}) => {
    return (
        <div className="text-center py-20">
            <h1 className="text-5xl font-bold">{title}</h1>
            <h3 className="text-lg font-light mt-2">{subTitle}</h3>
            
        </div>
    );
};
SectionHeader.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string
}

export default SectionHeader;