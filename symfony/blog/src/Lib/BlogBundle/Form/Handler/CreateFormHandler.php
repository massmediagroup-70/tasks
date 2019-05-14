<?php


namespace App\Lib\BlogBundle\Form\Handler;


use App\Lib\BlogBundle\Entity\Post;
use App\Lib\BlogBundle\Entity\Comment;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use PhpParser\Node\Expr\Array_;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\Request;
use App\Lib\BlogBundle\Form\ModuleType;

class CreateFormHandler
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function handle(FormInterface $form, Request $request)
    {
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()) {
            $post = $form->getData()['post'];

            $comments = $form->getData()['comments'];

            $this->createPost($post, $comments);

            return true;
        }
        return false;
    }

    private function createPost(Post $post, array $comments)
    {
        $this->entityManager->persist($post);

        $this->entityManager->flush();

        foreach ($comments as $comment){
            $comment->setPostId($post->getId());

            $this->entityManager->persist($comment);
            $this->entityManager->flush();
        }
    }

}
