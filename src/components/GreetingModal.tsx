import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  UseDisclosureProps,
  Text,
  Box
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next';

interface IGreetingModal extends UseDisclosureProps {
  claimId: string;
}

const GreetingModal = (props: IGreetingModal) => {
  const { isOpen, onClose, claimId } = props;
  const { t } = useTranslation();

  return (
    <Modal isOpen={isOpen!} onClose={onClose!} isCentered>
      <ModalOverlay />
      <ModalContent
        bgGradient={"radial(#FFBFFC, #3391FF)"}
        borderTopLeftRadius={20}
        textShadow={"-2px 0px #360a51"}
        >
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize={"3xl"} mb={5}>{t("greetingModal.title")}</Text>
          <Box background={"black"} p={4}
        borderTopLeftRadius={20}>
          <Text>
            {t("greetingModal.body")}
          </Text>
          <Text fontSize={"3xl"} fontWeight={"bold"} textAlign={"center"}>
            {claimId}
          </Text>
          </Box>
        </ModalBody>

        <ModalFooter justifyContent={"center"}>
          <Text fontSize={"small"}>
            {t("greetingModal.footer")}
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default GreetingModal;