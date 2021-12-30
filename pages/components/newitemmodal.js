import { useState, useContext, createContext } from 'react';
import {
	Flex,
	Link,
	Heading,
	Divider,
	Input,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalFooter,
	ModalBody,
	ModalHeader,
	Button
} from '@chakra-ui/react';
import { useNewItem } from '../../lib/newitem';
import { useAuth } from '../../lib/auth';
import { saveCube } from '../../lib/db';

export const NewItemModal = (props) => {
	const [name, setName] = useState('');
	const [desc, setDesc] = useState('');
	const handleName = (value) => setName(event.target.value);
	const handleDesc = (value) => setDesc(event.target.value);
	const auth = useAuth();

	return (
		<Modal isOpen={props.active} motionPreset="scale">
			<ModalOverlay>
				<ModalContent>
					<ModalHeader>
						<Flex justifyContent="center">
							<Heading fontWeight="bold" fontSize="4xl">
								New Table
							</Heading>
						</Flex>
					</ModalHeader>
					<ModalBody>
						<Input
							variant="flushed"
							onChange={(e) => handleName(e)}
							placeholder="Name"
						/>
						<Input
							variant="flushed"
							onChange={(e) => handleDesc(e)}
							placeholder="Description (Optional)"
						/>
					</ModalBody>
					<ModalFooter>
						<Flex justifyContent={'center'}>
							<Button
								marginRight="5"
								onClick={() => {
									saveCube(
										name,
										desc,
										auth.user.uid,
										props.setActive
									);
								}}
							>
								Save
							</Button>
							<Button
								onClick={() => {
									props.setActive(false);
								}}
							>
								Close
							</Button>
						</Flex>
					</ModalFooter>
				</ModalContent>
			</ModalOverlay>
		</Modal>
	);
};

export default NewItemModal;
