import {ClipLoader} from "react-spinners";
const override = {
    display: 'block',
    margin: '100px auto',
}
const Spinner = ({ loading }) => {
    return (
        <ClipLoader
            color={'#123abc'}
            loading={loading}
            size={150}
            cssOverride={override}
        />
    );
};

export default Spinner;