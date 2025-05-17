import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQ = ({ faqs }) => {
  const defaultFaqs = [
    {
      question: "How do I get started?",
      answer: "Simply sign up for an account and follow the onboarding process. Our intuitive interface will guide you through the setup process."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. All payment information is securely processed and encrypted."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial so you can explore all features before committing to a subscription."
    },
    {
      question: "How do I contact customer support?",
      answer: "Our support team is available 24/7 via email at support@example.com or through the chat feature in your dashboard."
    }
  ];

  const faqItems = faqs || defaultFaqs;

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Can't find the answer you're looking for? Contact our customer support team.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;