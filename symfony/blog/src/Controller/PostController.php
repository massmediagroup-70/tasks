<?php


namespace App\Controller;

use App\Entity\Post;
use App\Form\ModuleType;
use App\Form\PostType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class PostController extends AbstractController
{
    /**
     * @Route("/posts", name="posts")
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $entityManager = $this->getDoctrine()->getManager();

        $post = new Post();
        $post->setTitle('Keyboard');
        $post->setContent("A lot of content");

        // tell Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->persist($post);

        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();


        $posts = $this->getDoctrine()
            ->getRepository(Post::class)
            ->findAll();

        $post = new Post();
        $comment = new Post();
        $form = $this->createForm(ModuleType::class, [$post, $comment]);
        return $this->render('post/index.html.twig', ['form' => $form->createView(), 'posts' => $posts ]);
    }

    public function addAction()
    {

    }

}
