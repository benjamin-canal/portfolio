<?php

namespace App\Controller\Front;

use App\Entity\ContactEmail;
use App\Form\ContactFormType;
use Symfony\Component\Mime\Email;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Mailer\Event\MessageEvents;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;

class EmailController extends AbstractController
{
    /**
     * @Route("/contact", name="contact")
     */
    public function sendEmail(MailerInterface $mailer, Request $request, ManagerRegistry $doctrine): Response
    {   
        
        $form = $this->createForm(ContactFormType::class);

        $form->handleRequest($request);
       
        if ($form->isSubmitted() && $form->isValid()) {

            $emailFormData = $form->getData();
            
            $email = (new Email())
            ->from($emailFormData->getEmail())
            ->to('benjamin.canal@gmail.com')
            ->subject($emailFormData->getSubject())
            ->text($emailFormData->getText());
       
            $mailer->send($email);
        
            $entityManager = $doctrine->getManager();
            $contactEmail = new ContactEmail();

            $contactEmail->setEmail($emailFormData->getEmail());
            $contactEmail->setSubject($emailFormData->getSubject());
            $contactEmail->setText($emailFormData->getText());
            $contactEmail->setFirstName($emailFormData->getFirstName());
            $contactEmail->setLastName($emailFormData->getLastName());

            $entityManager->persist($contactEmail);
            $entityManager->flush();

            if ($contactEmail){
                $email = (new TemplatedEmail())
                    ->from('benjamin.canal@canaldev.fr')
                    ->to($emailFormData->getEmail())
                    ->subject('Merci de m\'avoir contacté!')
                    ->htmlTemplate('email/email-response.html.twig')
                    ->context([
                        'firstName' => $emailFormData->getFirstName(),
                        'lastName' => $emailFormData->getLastName(),
                    ])
                ;
                $mailer->send($email);
            }
            
            return $this->redirectToRoute('home');

        }

        
        return $this->renderForm('email/contact.html.twig', [
            'form' => $form,
        ]);
    }

}
