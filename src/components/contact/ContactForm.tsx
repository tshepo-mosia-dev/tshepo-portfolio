import Button from "../ui/Button";

const ContactForm = () => {
    return (
        <form className="space-y-6 rounded-xl border border-gray-200 p-8 dark:border-gray-800">
            <div>
                <label className="mb-2 block font-medium">Name</label>
                <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-gray-300 p-3 placeholder:text-gray-400 dark:border-gray-700 dark:bg-gray-900"
                />
            </div>

            <div>
                <label className="mb-2 block font-medium">Email</label>
                <input
                    type="email"
                    placeholder="Your email address"
                    name="email"
                    className="w-full rounded-lg border border-gray-300 p-3 placeholder:text-gray-400 dark:border-gray-700 dark:bg-gray-900"
                />
            </div>

            <div>
                <label className="mb-2 block font-medium">
                    Subject
                </label>

                <input
                    type="text"
                    placeholder="Subject"
                    className="w-full rounded-lg border border-gray-300 p-3 placeholder:text-gray-400 dark:border-gray-700 dark:bg-gray-900"
                />
            </div>

            <div>
                <label className="mb-2 block font-medium">Message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    className="w-full rounded-lg border border-gray-300 p-3 placeholder:text-gray-400 dark:border-gray-700 dark:bg-gray-900"
                ></textarea>
            </div>

            <Button>Send Message</Button>
        </form>
    );
};

export default ContactForm;