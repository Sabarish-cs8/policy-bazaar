import { useUserInformation } from "./home"

const  UserForm = () =>{
    const {userDetails} = useUserInformation();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted:", userDetails);
        // Add form submission logic here
    };
    return(
        <form onSubmit={handleSubmit}>
            {/* Add your form fields here */}
            <button type="submit">Submit</button>
        </form>
)
}
export default UserForm;
