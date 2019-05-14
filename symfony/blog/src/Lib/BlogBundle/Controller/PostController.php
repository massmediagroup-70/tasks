<?php


namespace App\Lib\BlogBundle\Controller;

use App\Lib\BlogBundle\Entity\Comment;
use App\Lib\BlogBundle\Entity\Post;
use App\Lib\BlogBundle\Form\CommentType;
use App\Lib\BlogBundle\Form\ModuleType;
use App\Lib\BlogBundle\Form\PostType;
use Doctrine\ORM\EntityManager;
use function Sodium\add;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

class PostController extends Controller
{

    public function __construct()
    {

    }
    /**
     * @param Request $request
     * @return Response
     *
     */
    public function index(Request $request)
    {
        $posts = $this->getDoctrine()
            ->getRepository(Post::class)
            ->findLatest();
        $commentsPosts = $this->getDoctrine()
            ->getRepository(Comment::class)
            ->findAll();


        $post = new Post();
        $comments = [];
        $form = $this->createForm(ModuleType::class, [$post,'comments'=>$comments]);


        $formHandler = $this->get("lib.create_form_handler");
        if($formHandler->handle($form, $request)){
            return $this->redirect($request->getUri());
        }

        return $this->render('post/index.html.twig', ['form' => $form->createView(), 'posts' => $posts, 'commentsPosts' => $commentsPosts ]);
    }



}
