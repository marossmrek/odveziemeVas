<?php include_once 'partials/header.php'; ?>

    <?php if ( have_posts() ) : ?>
        <?php while ( have_posts() ) : the_post() ?>
         <section><div class="row">
                <?php the_content() ?>
         </section>
        <?php endwhile ?>

    <?php endif ?>

<?php include_once 'partials/footer.php'; ?>