import * as Dialog from '@radix-ui/react-dialog';

interface ModalProps extends Dialog.DialogProps { };

export default function Modal(props: ModalProps) {
    return (
        <Dialog.Root {...props}>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black/80 data-[state=open]:animate-overlayShow fixed inset-0 z-50">
                    <Dialog.Content className="fixed top-[50%] left-[50%] w-4/5 h-4/5 translate-x-[-50%] translate-y-[-50%] bg-white focus:outline-none">
                        {props.children}
                        <Dialog.Close asChild>
                            <button
                                className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-inter focus:shadow-blue-600 absolute -top-8 -right-8 inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                                aria-label="Close"
                            >
                                X
                            </button>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Overlay>
            </Dialog.Portal>
        </Dialog.Root>
    );
}