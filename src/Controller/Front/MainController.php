<?php

namespace App\Controller\Front;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    /**
     * @Route("", name="home")
     */
    public function home(): Response
    {
        return $this->render('front/main/home.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }

    /**
     * @Route("/mentions-legales", name="legal-mentions")
     */
    public function legalMentions(): Response
    {
        return $this->render('front/main/legal-mentions.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }
}
