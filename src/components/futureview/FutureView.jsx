import { useState } from 'react'
import CreatePlaceForm from '../createplaceform/CreatePlaceForm';

const FutureView = () => {
  const [isFormActive, setIsFormActive] = useState(false)

  const handleStateChange = (newState) => {
    setIsFormActive(newState);
  }

  return (
    <div className="flex justify-center m-5 mb-32">
      <button id="defaultModalButton" data-modal-toggle="defaultModal" className="text-dark bg-primary-700 focus:ring-primary-300" type="button" onClick={() => setIsFormActive(true)}>
        Create place
      </button>
      {isFormActive && (
        <CreatePlaceForm onStateChange={handleStateChange} />
      )}
    </div>
  )
}

export default FutureView;
