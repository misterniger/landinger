'use client'
import { useRef } from 'react'
import Modal from './Modal'
import z from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import useModalStore from '@/stores/modalStore'
import { TbX } from 'react-icons/tb'
import Input from './Input'
import Spinner from './Spinner'
import { HiOutlineUser } from 'react-icons/hi2'
import { FiMail } from 'react-icons/fi'
import { toast } from 'react-toastify'

const contactSchema = z.object({
    name: z
        .string()
        .nonempty('Name is required')
        .min(3, 'The name must be at least 3 characters long.'),
    email: z
        .string()
        .nonempty('Email is required')
        .email('Invalid email address'),
})
type ContactType = z.infer<typeof contactSchema>

function WaitlistForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactType>({ resolver: zodResolver(contactSchema) })
    const modalRef = useRef(null)
    const formRef = useRef<HTMLFormElement>(null)

    const closeModal = useModalStore((state) => state.closeModal)

    const onSubmit: SubmitHandler<ContactType> = async (data) => {
        console.log(data)
        toast.success(`Thank you for join to waitlist 🎉`)
        reset()
        closeModal()
    }

    const handleCloseModal = () => {
        closeModal()
    }

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
        ref: React.RefObject<HTMLFormElement | null>
    ) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            ref.current?.requestSubmit()
        }
    }

    return (
        <Modal modalRef={modalRef}>
            <div
                className={`bg-dark5 mx-auto w-full rounded-t-3xl px-5 py-7 sm:w-[626px] lg:rounded-b-3xl lg:p-5`}
            >
                <form
                    ref={formRef}
                    id="waitlist-form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex w-full flex-col gap-6 sm:gap-8"
                >
                    <div className="flex items-start justify-between gap-2">
                        <div>
                            <h2 className="mb-4 text-2xl font-medium leading-[130%]">
                                Join the waitlist
                            </h2>
                            <p className="text-primary/70 text-sm leading-5 sm:text-base">
                                Be the first to know when we launch. Get
                                exclusive early access and special perks.
                            </p>
                        </div>
                        <button
                            onClick={handleCloseModal}
                            type="button"
                            className="text-primary hover:text-primary/70 flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-3xl transition-colors duration-300"
                        >
                            <TbX className="pointer-events-none size-5" />
                        </button>
                    </div>
                    <div className="flex flex-col gap-6">
                        <Input
                            type="name"
                            name="name"
                            label="Name"
                            placeholder="Enter fake name..."
                            formRegister={register('name')}
                            error={errors?.name || null}
                            message={errors?.name?.message || null}
                            disabled={isSubmitting}
                            autoComplete="name"
                            onKeyDown={(e) => handleKeyDown(e, formRef)}
                        >
                            <HiOutlineUser className="pointer-events-none size-5" />
                        </Input>
                        <Input
                            type="email"
                            name="email"
                            label="Email"
                            placeholder="Enter your email"
                            formRegister={register('email')}
                            error={errors?.email || null}
                            message={errors?.email?.message || null}
                            disabled={isSubmitting}
                            autoComplete="email"
                            onKeyDown={(e) => handleKeyDown(e, formRef)}
                        >
                            <FiMail className="pointer-events-none size-5" />
                        </Input>
                    </div>
                    <div className="flex w-full flex-col">
                        <button
                            disabled={isSubmitting}
                            className="bg-primary text-blackBg hover:bg-primary/90 disabled:bg-primary/70 relative flex h-10 w-full cursor-pointer items-center justify-center rounded-full text-center text-sm font-medium -tracking-tight transition-colors duration-300"
                        >
                            <span
                                className={`${isSubmitting ? 'invisible' : 'visible'}`}
                            >
                                Join the waitlist
                            </span>{' '}
                            {isSubmitting && (
                                <Spinner restClass="absolute left-1/2 -translate-x-1/2" />
                            )}
                        </button>
                        <p className="text-primary/70 mt-5 text-center text-sm">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default WaitlistForm
