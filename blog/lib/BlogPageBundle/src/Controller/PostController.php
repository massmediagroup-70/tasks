<?php

namespace BlogPageBundle\src\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

class PostController extends AbstractController
{
    public function index()
    {
        return $this->render('post/index.html.twig', [
        ]);
    }


    public function showAction(CommonPost $post)
    {
        $post = $this->getDoctrine()
            ->getRepository(post::class)
            ->find($post->getId());

        if (!$post) {
            throw $this->createNotFoundException(
                'No post found for id '
            );
        }

        return new Response('Check out this great post: '.$post->getTitle());
    }


    /* public function editAction(Post $post)
     {
         $post = $this->getDoctrine()
             ->getRepository(post::class)
             ->find($post->getId());

         if (!$post) {
             throw $this->createNotFoundException(
                 'No post found for id '
             );
         }
         $em = $this->getDoctrine()->getManager();
         $post = $em->getRepository(Post::class)->find($post->getId());
         $post->setTitle('Вимирання панд.');
         $em->flush();
         return $this->redirectToRoute('post_show', [
             'id' => $post->getId()
         ]);
     }*/

    public function editAction(Post $post, Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $post = $em->getRepository(Post::class)->find($post->getId());

        $form = $this->createForm(PostType::class, $post);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // $form->getData() holds the submitted values
            // но первоначальная переменная `$task` тоже была обновлена
            $post = $form->getData();

            // ... . выполните действия, такие как сохранение задачи в базе данных
            // например, если Task является сущностью Doctrine, сохраните его!
            $em = $this->getDoctrine()->getManager();
            $em->persist($post);
            $em->flush();

            return $this->redirectToRoute('post_show', ['id' => $post->getId()]);
        }

        return $this->render('post/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
