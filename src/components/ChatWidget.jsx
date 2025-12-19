import { useState, useEffect, useRef } from 'react';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Vanakkam! Unga tattoo doubts clear panna naan irukken. Price, design, illana appointment pathi ethavathu kekanuma?', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    ]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    const handleSend = () => {
        if (!inputText.trim()) return;

        const userMsg = {
            type: 'user',
            text: inputText,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, userMsg]);
        setInputText('');
        setIsTyping(true);

        // Process response
        setTimeout(() => {
            const response = getBotResponse(userMsg.text);
            setIsTyping(false);
            setMessages(prev => [...prev, {
                type: 'bot',
                text: response.text,
                hasButton: response.hasButton,
                buttonText: response.buttonText,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }]);
        }, 1500);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    const getBotResponse = (input) => {
        const msg = input.toLowerCase();

        if (msg.includes("price") || msg.includes("cost") || msg.includes("rate") || msg.includes("evlo")) {
            return {
                text: "Tattoo price design size, complexity, and placement poruthu maarum. Basic starting price ₹1000. Appointment book panna, correct quote solla mudiyum.",
                hasButton: true,
                buttonText: "Book Appointment"
            };
        }

        if (msg.includes("where") || msg.includes("place") || msg.includes("yedam")) {
            return { text: "Enga studio address: Abirami complex, bus stop pakathula, opposite Indian Bank Colony, Ganesh Nagar, K K Nagar, Trichy - 620021." };
        }

        if (msg.includes("contact") || msg.includes("phone") || msg.includes("call") || msg.includes("number")) {
            return { text: "Neenga call panna vendiya number: +91 63852 17970. Illana info@qualitytattoostudio.in-ku email pannunga." };
        }

        if (msg.includes("appointment") || msg.includes("book") || msg.includes("schedule") || msg.includes("reserve") || msg.includes("booking")) {
            return { text: "Appointment book panna help panren! Keela irukka button-a click panni date and time select pannikonga.", hasButton: true, buttonText: "Book Appointment Now" };
        }

        // Safety/Hygiene related
        if (msg.includes("safe") || msg.includes("hygiene") || msg.includes("clean") || msg.includes("sterile")) {
            return { text: "Safety romba mukkiyam! 100% sterilized equipment and puthu single-use needle thaan use panrom. So neenga bayapadama varalam." };
        }

        // Aftercare related
        if (msg.includes("aftercare") || msg.includes("healing") || msg.includes("care") || msg.includes("maintain")) {
            return { text: "Tattoo-va clean-a vachukonga. Direct sunlight-la kaata vendam. Naanga solra cream-a 7-14 days correct-a apply pannunga. Full instructions tharuvom." };
        }

        // Pain related
        if (msg.includes("pain") || msg.includes("hurt") || msg.includes("painful") || msg.includes("vali")) {
            return { text: "Vali konjam irukkum, aana romba theriyathu. Body part poruthu maarum. Unga comfort-ku yetha maari professional-a pannuvom." };
        }

        // Design related
        if (msg.includes("design") || msg.includes("custom") || msg.includes("idea") || msg.includes("create")) {
            return { text: "Kandippa! Unga manasula irukka idea illana reference image katuunga, nanga athuku yetha maari custom design panni tharuvom." };
        }

        // Time related
        if (msg.includes("how long") || msg.includes("time") || msg.includes("session") || msg.includes("duration")) {
            return { text: "Chinna tattoo-na 20-40 mins aagum. Perusa iruntha time edukum. Consultation appo correct time estimate solvom." };
        }

        // Ink quality related
        if (msg.includes("ink") || msg.includes("quality") || msg.includes("material")) {
            return { text: "Skin-ku safe-aana, internationally certified premium quality ink thaan use panrom. No compromise in quality." };
        }

        // Aftercare timing related
        if (msg.includes("wash") || msg.includes("swim") || msg.includes("workout") || msg.includes("shower")) {
            return { text: "Swimming, heavy workout ellam 7 days-ku avoid pannunga. 24 hours-ku apparam gentle soap pottu wash pannalam." };
        }

        // Default response
        return { text: "For urgent queries, please call +91 63852 17970." };
    };

    return (
        <>
            <button className="chat-button" onClick={() => setIsOpen(!isOpen)} style={{ position: 'fixed', bottom: '110px', right: '30px', zIndex: 9999 }}>
                <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-chat-dots-fill'}`}></i>
            </button>

            <div className={`chat-window ${isOpen ? 'active' : ''}`} style={{ zIndex: 9999 }}>
                <div className="chat-header">
                    <div className="chat-title">
                        <i className="bi bi-robot"></i>
                        <span>Quality Tattoo Assistant</span>
                    </div>
                    <button className="chat-close" onClick={() => setIsOpen(false)}>
                        <i className="bi bi-x"></i>
                    </button>
                </div>

                <div className="chat-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.type === 'user' ? 'user-message' : 'bot-message'}`}>
                            <div className="message-content">
                                {renderMessage(msg.text)}
                                {msg.hasButton && (
                                    <div className="mt-2">
                                        <a href="/appointment" className="btn btn-sm btn-primary text-white" style={{ borderRadius: '8px' }}>{msg.buttonText || "Click Here"}</a>
                                    </div>
                                )}
                            </div>
                            <div className="message-time">{msg.time}</div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="typing-indicator active">
                            <div className="typing-dot"></div>
                            <div className="typing-dot"></div>
                            <div className="typing-dot"></div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="chat-input-area" style={{ padding: '15px', borderTop: '1px solid #eee', display: 'flex', gap: '10px' }}>
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyPress={handleKeyPress}
                        style={{ flex: 1, padding: '10px', borderRadius: '20px', border: '1px solid #ddd', outline: 'none' }}
                    />
                    <button
                        onClick={handleSend}
                        style={{ background: 'var(--primary)', border: 'none', width: '40px', height: '40px', borderRadius: '50%', color: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <i className="bi bi-send-fill"></i>
                    </button>
                </div>
                <div className="chat-footer text-center py-2" style={{ fontSize: '10px', color: '#999', background: '#f9fafb', borderTop: '1px solid #eee' }}>
                    Designed by PixelGridHub
                </div>
            </div>
        </>
    );
};

// Helper to render text with phone links
const renderMessage = (text) => {
    // Regex to match the specific number or general 10-digit indian numbers
    // Focus on the specific one requested: +91 63852 17970
    const parts = text.split(/(\+91\s?63852\s?17970)/g);
    return parts.map((part, index) => {
        if (part.replace(/\s/g, '') === '+916385217970') {
            return (
                <a key={index} href="tel:+916385217970" style={{ color: 'var(--primary)', textDecoration: 'underline', fontWeight: 'bold' }}>
                    {part}
                </a>
            );
        }
        return part;
    });
};

export default ChatWidget;
