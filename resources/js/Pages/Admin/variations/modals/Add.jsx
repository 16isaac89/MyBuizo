import React,{Fragment} from "react"
import { Modal,Button } from "flowbite-react"
import {useForm} from '@inertiajs/react';

export default function Add(){
    const { data, setData } = useForm({
        modal:false
     });

     const openModal = () =>{
        setData('modal',true)
            }
            const closeModal = () =>{
                setData('modal',false)
            }
return(
   <Fragment>
  <Modal
    show={data.modal}
    onClose={()=>{}}
  >
    <Modal.Header>
      Terms of Service
    </Modal.Header>
    <Modal.Body>
      <div className="space-y-6">
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
        </p>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
        </p>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={closeModal()}>
        I accept
      </Button>
      <Button
        color="gray"
        onClick={closeModal()}
      >
        Decline
      </Button>
    </Modal.Footer>
  </Modal>
  </Fragment>
)
}
