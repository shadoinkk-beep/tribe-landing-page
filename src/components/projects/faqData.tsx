import { JSX } from "react";

// data/faqData.ts
export interface FaqItem {
    question: string;
    answer: string | JSX.Element;
  }
  
  export const faqData: FaqItem[] = [
    {
      question: 'What is Whispering Woods?',
      answer:
        'Whispering Woods is a luxury farmhouse community developed by the Ram Rattan Group, offering 2.5 and 3.5 BHK farmhouses with private pools, set within a gated, eco-friendly estate off the Delhi-Mumbai Expressway.',
    },
    {
      question: 'Where is it located?',
      answer:
        'The project is situated in Naugaon, Rajasthan, approximately 85 minutes from Rajiv Chowk, Gurgaon, via the Delhi-Mumbai Expressway.',
    },
    {
      question: 'What are the available farmhouse sizes and configurations?',
      answer: (
        <ul className="list-disc ml-6 space-y-1">
          <li>2.5 BHK: Built-up area of 1,510 Sq. Yards* on a 13,600 Sq. Yards* plot.</li>
          <li>3.5 BHK: Built-up area of 2,050 Sq. Yards* on a 27,225 Sq. Yards* plot.</li>
        </ul>
      ),
    },
    {
      question: 'When is the possession date?',
      answer: 'Possession is expected by March 2025.',
    },
    {
      question: 'What is the starting price?',
      answer: 'Prices start from ₹1.60 Cr for the 2.5 BHK units.',
    },
    {
      question: 'Is there a payment plan available?',
      answer: 'Yes, a 50:50 payment plan is offered—50% at booking and 50% at possession.',
    },
    {
      question: 'Can I earn rental income from my farmhouse?',
      answer:
        'Yes, Whispering Woods has partnered with StayVista for leasing and hospitality services, offering potential rental income of up to ₹16,00,320 per year.',
    },
    {
      question: 'Are the farmhouses eco-friendly?',
      answer:
        'Yes, they feature zero-maintenance construction with a 50+ year lifespan, promoting sustainable living.',
    },
    {
      question: 'Can non-agriculturists purchase these farmhouses?',
      answer:
        'Yes, under Rajasthan’s Tenancy Act, non-agriculturists can own farmhouses, provided they obtain the necessary approvals.',
    },
    {
      question: 'What amenities are included?',
      answer: (
        <ul className="list-disc ml-6 space-y-1">
          <li>Private pool</li>
          <li>Premium clubhouse</li>
          <li>Woodland adventure park with zip line</li>
          <li>Multipurpose hall and amphitheatre</li>
          <li>Restaurant, coffee house, and theme dining</li>
          <li>Fully equipped gym and wellness zone</li>
          <li>Paintball arena, party, and picnic spaces</li>
          <li>Assured rentals</li>
        </ul>
      ),
    },
  ];
  