import { Component } from "react";
import { dogPictures } from "../dog-pictures";
import { Dogs } from "../types";
import { Requests } from "../api";
import toast from "react-hot-toast";

export class ClassCreateDogForm extends Component<{setAllDogs: ()=> void, setIsLoading: (boolean:boolean) => void, isLoading: boolean}> {
  state: Omit<Dogs, 'id'> = {
    name: '',
    image: '',
    description:'',
    isFavorite: false,
  }
  render() {
    const {name, image, description} = this.state
    const {setAllDogs, setIsLoading, isLoading} = this.props
    const submitAction = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
          setIsLoading(true)
          Requests.postDog(this.state).then(() => {setAllDogs(); this.setState({
            name: '',
            image: '',
            description:'',
            isFavorite: false,
          })}).finally(() => {setIsLoading(false); toast.success('Congrats on adding your beautiful dog to our collection!')})
    }
    return (
      <form
        action=""
        id="create-dog-form"
        onSubmit={submitAction}
      >
        <h4>Create a New Dog</h4>
        <label htmlFor="name">Dog Name</label>
        <input type="text" onChange={(e) => this.setState({name: e.target.value})} disabled={isLoading} value={name}/>
        <label htmlFor="description">Dog Description</label>
        <textarea
          name=""
          id=""
          value={description}
          cols={80}
          rows={10}
          onChange={(e) => this.setState({description: e.target.value})}
          disabled={isLoading}
        />
        <label htmlFor="picture">Select an Image</label>
        <select onChange={(e) => this.setState({image: e.target.value})} value={image} disabled={isLoading}>
          {Object.entries(dogPictures).map(([label, pictureValue]) => {
            return (
              <option value={pictureValue} key={pictureValue}>
                {label}
              </option>
            );
          })}
        </select>
        <input type="submit" value="submit" disabled={isLoading} />
      </form>
    );
  }
}
