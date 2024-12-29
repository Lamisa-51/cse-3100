export function ContactUs() {
    return (
        <section className="text-center mt-4">
            <h2>Contact Us</h2>
            <form className="mt-3">
                <div className="mb-3 d-flex justify-content-center">
                    <div style={{ width: '400px' }}>
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" id="name" className="form-control" placeholder="Your Name" required />
                    </div>
                </div>
                <div className="mb-3 d-flex justify-content-center">
                    <div style={{ width: '400px' }}>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" id="email" className="form-control" placeholder="Your Email" required />
                    </div>
                </div>
                <div className="mb-3 d-flex justify-content-center">
                    <div style={{ width: '400px' }}>
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea id="message" className="form-control" rows="4" placeholder="Your Message" required></textarea>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </section>
    );
}

