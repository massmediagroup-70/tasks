<?php


namespace App\Lib\BlogBundle\Repository;

use App\Lib\BlogBundle\Entity\Comment;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

class CommentRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Comment::class);
    }
    public function findToPost($post_id)
    {
        return $this->getEntityManager()
            ->createQuery(
                'SELECT c FROM LibBlogBundle:Comment c WHERE c.postId = '.$post_id
            )
            ->getResult();

    }


}
