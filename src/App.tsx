import Button from "./components/Button"
import PlusIcon from "./components/Icons/PlusIcon";
import ShareIcon from "./components/Icons/ShareIcon";

const App = () => {
  return (<div className="p-96">
    <Button variant="primary" size="md" text="Add Content" icon={<PlusIcon size="sm"/>} />
    <br />
    <br />
    <Button variant="secondary" size="md" text="Share Brain" icon={<ShareIcon size="sm"/>} />
  </div>);
}

export default App
