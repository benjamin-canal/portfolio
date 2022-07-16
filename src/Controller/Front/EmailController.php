<?php

namespace App\Controller\Front;

use App\Form\ContactType;
use Symfony\Component\Mime\Email;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class EmailController extends AbstractController
{
    /**
     * @Route("/contact", name="email")
     */
    public function sendEmail(MailerInterface $mailer, Request $request): Response
    {   
        $form = $this->createForm(ContactType::class);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $emailForm = $form->getData();

            $email = (new Email())
            ->from($emailForm->getEmail())
            ->to('benjamin.canal@canaldev.fr')
            ->text($emailForm->getContent())
            ->html('<p>See Twig integration for better HTML integration!</p>');

            $mailer->send($email);

            return $this->redirectToRoute('home');
        }

        return $this->renderForm('email/contact.html.twig', [
            'form' => $form,
        ]);

    }
}
