<?php


namespace App\Lib\BlogBundle\Repository;

use App\Lib\BlogBundle\Entity\Post;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

class PostRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Post::class);
    }

    public function findLatest($limit = 10)
    {
        return $this->getEntityManager()
            ->createQuery(
                'SELECT p FROM LibBlogBundle:Post p'
            )
            ->setMaxResults($limit)
            ->getResult();

    }

    public function findPostsAndComments()
    {
        return $this->getEntityManager()
            ->createQuery(
                'SELECT p.title, p.content, c.author, c.content FROM LibBlogBundle:Post p INNER JOIN LibBlogBundle:Comment c WHERE p.id = c.postId'
            )
            ->getResult();

    }


}
